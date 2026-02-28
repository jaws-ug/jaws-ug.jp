FROM debian:trixie-backports
ARG RUBY_VERSION=3.0.4
ARG USERNAME=dev
ARG USER_UID=1000
ARG USER_GID=1000

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        git \
        curl \
        ca-certificates \
        autoconf \
        bison \
        libssl-dev \
        libyaml-dev \
        zlib1g-dev \
        libffi-dev \
        libgmp-dev \
        libreadline-dev \
        libncurses-dev \
        libgdbm-dev \
        libgdbm-compat-dev \
        libdb-dev \
        uuid-dev \
        xz-utils \
        pkg-config \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd --uid ${USER_UID} --gid ${USER_GID} --create-home --shell /bin/bash ${USERNAME}

ENV RBENV_ROOT=/home/${USERNAME}/.rbenv
ENV PATH=${RBENV_ROOT}/bin:${RBENV_ROOT}/shims:${PATH}

USER ${USERNAME}

RUN git clone https://github.com/rbenv/rbenv.git ${RBENV_ROOT} \
    && mkdir -p ${RBENV_ROOT}/plugins \
    && git clone https://github.com/rbenv/ruby-build.git ${RBENV_ROOT}/plugins/ruby-build \
    && rbenv install -s ${RUBY_VERSION} \
    && rbenv global ${RUBY_VERSION} \
    && gem install bundler -v 2.2.33

WORKDIR /workspace

ENV BUNDLE_PATH=/workspace/vendor/bundle
ENV BUNDLE_JOBS=4
ENV BUNDLE_RETRY=3
