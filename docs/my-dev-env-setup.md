---
slug: my-dev-env-setup
title: 나의 개발 환경 설정 (WSL Ubuntu)
tags: [wsl]
---

## 소개

### 목적

처음 개발 환경을 설치해야 할 일이 생길 때 다른 자료를 참고하지 않고 구성할 수 있게 정리했습니다.

### 전제

Windows 11에서 WSL로 신규 Ubuntu 이미지를 설치한 이후의 과정을 다룹니다.

WSL 설치 과정은 다루지 않습니다.

### 설치하는 프로그램들

설치 전 환경: 빈 VSCode, git, bash

설정 후 환경: 
- zsh + ohmyzsh + auto suggestions + syntax highlighting
- nvm + Node.js v16
- git + GitHub SSH 인증
- 프로젝트 내부
	- VSCode Remote (자동 설치)
	- VSCode 각종 Extension (프로젝트에서 설정한 목록을 설치: `/.vscode/extensions.json`)
	- Yarn Berry (무설치)

## 방법

zsh > nvm > git 설치 순으로 설명합니다.

### zsh 및 플러그인 설치

> zsh agnoster에 사용되는 폰트는 따로 설치 후 터미널 폰트로 설정해야 합니다. https://github.com/powerline/fonts 의 안내대로 진행해주세요.

사용 이유: 유용한 플러그인과 테마를 갖고 있어 bash보다 편리합니다.

설치할 플러그인:
- `zsh-autosuggestions`: history에 대해 자동 완성 기능을 제공합니다.
- `zsh-syntax-highlighting`: 유효한 executable 여부를 빨간색, 초록색으로 미리 보여줍니다.

설치 스크립트:
```sh
# zsh 설치
sudo apt install zsh

# ohmyzsh 설치
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# autosuggestions 플러그인 설치
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# syntax highlighting 플러그인 설치
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# zshrc 설정 열기
nano ~/.zhsrc
```

zshrc 수정 내용:
```sh
# 이전 내용 
ZSH_THEME="<기본 테마 값>"
(...중략...)
plugins=(git)

# 수정 후
ZSH_THEME="agnoster"
(...중략...)
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

zshrc 수정 내용을 반영해줍니다:
```sh
source ~/.zhsrc
```

(선택) VSCode 터미널의 기본 셸을 바꾸려면 
- `Ctrl + P` > `Open Settings` > `default profile linux`로 검색한 후 
- `Terminal › Integrated › Default Profile: Linux`의 값을 
- `bash`에서 `zsh`로 변경해주세요.

### nvm 및 Node.js 16 설치

[nvm](https://github.com/nvm-sh/nvm)은 Node Version Manager의 약자로, 여러 버전을 한 번에 설치한 후 명령어 하나로 현재 사용 중인 Node 버전을 변경할 수 있습니다.

nvm 설치 스크립트:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```

nvm 설정(`nano ~/.zshrc` 후 아래 내용을 맨 끝에 추가해주세요):
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

설정 파일을 적용한 후 nvm을 실행해봅니다. 설명이 잔뜩 뜨면 정상적으로 설치된 것입니다.
```sh
source ~/.zshrc

nvm
```

Node.js 16 LTS를 설치해주세요. 최초 설치여서 기본 버전으로 자동 설정 됩니다.
```sh
nvm install 16
```

### git 프로필 설정 및 GitHub SSH 등록하기

git 프로필을 설정해줍니다.
```sh
git config --global user.email "seongbin9786@gmail.com"
git config --global user.name "Seongbin Kim"
```

GitHub의 git repository에 `clone` 등의 작업을 하려면 신원 증명을 해야 합니다.
```sh
ssh-keygen
```

기본 저장 경로인 `~/.ssh/id_rsa`, `~/.ssh/id_rsa.pub`으로 설정해주시고, `passphrase`도 설정해주세요.

[GitHub의 SSH 설정 페이지](https://github.com/settings/keys)로 들어간 후 `New SSH Key` 버튼을 눌러주세요. 그리고 생성한 공개 키의 내용을 붙여 넣기 합니다(`cat ~/.ssh/id_rsa.pub`로 내용을 확인 후 복사 붙여 넣기 하면 됩니다).

이후 `clone` 등의 작업을 하게 되면 생성한 비밀 키의 비밀번호(`passphrase`)를 입력하면 신원이 증명됩니다.

