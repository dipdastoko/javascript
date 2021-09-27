const name = 'ami';

console.log(name);

try {
    name = 'tumi';
}
catch (ex) {
    console.log('name is constant');
}