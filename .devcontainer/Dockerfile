ARG RUBY_VERSION=3.0.4
FROM debian:trixie-backports

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

ENV RBENV_ROOT=/root/.rbenv
ENV PATH=${RBENV_ROOT}/bin:${RBENV_ROOT}/shims:${PATH}

RUN git clone https://github.com/rbenv/rbenv.git ${RBENV_ROOT} \
    && mkdir -p ${RBENV_ROOT}/plugins \
    && git clone https://github.com/rbenv/ruby-build.git ${RBENV_ROOT}/plugins/ruby-build \
    && rbenv install -s ${RUBY_VERSION} \
    && rbenv global ${RUBY_VERSION} \
    && gem update --system \
    && gem install bundler

WORKDIR /workspace

ENV BUNDLE_PATH=/workspace/vendor/bundle
ENV BUNDLE_JOBS=4
ENV BUNDLE_RETRY=3
