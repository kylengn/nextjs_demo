function Welcome(data) {
    console.log('Debug')
    console.log(data)
    return (<h1>Hello, {data.name}, {data.age}</h1>);
}

export default Welcome;