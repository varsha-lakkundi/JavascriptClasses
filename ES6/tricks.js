const switchCaseFn = (key) => {
    const keys = {
        message1: 'Rama Rama',
        message2: 'Ayyo Raama',
        message3: 'Oh God'
    };
    return keys[key];
}

console.log(switchCaseFn('message2'));