export var process = {
    // eslint-disable-next-line no-undef
    env: new Proxy({}, {
        get: () => '',
    })
}
