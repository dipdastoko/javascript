//1.
const obj = {
    name: 'Redmi Y3',
    isAvailable: true,
    price: 12000,
    camera: {
        front: '32 Mega Pixel',
        back: '8 Mega pixel'
    },
    color: ['blue', 'black', 'red'],
    total: function (vat) {
        vat = vat / 100;
        this.price += this.price * vat;
        return this.price;
        // console.log(this);
    }
}

//2.
const phoneInfo = `Phone information: name-${obj.name}, front-camera:${obj.camera.front}, color:${obj.color[1]}, price:${obj.total(15)} `;

// console.log(phoneInfo);

//3.1
const num = () => 89;
// console.log(num());

//3.2
const num1 = x => x / 7;
// console.log(num1(49));

//3.3
const num3 = (x, y) => (x + y) / 2;
// console.log(num3(4, 6));

//3.4
const num4 = (x, y) => {
    x += 7;
    y += 7;
    return x + y;
}
// console.log(num4(1, 1));

//4.
const arr = [7, 14, 21, 28, 22, 19];
const output = arr.map(x => x / 7);
// console.log(output);

//5.
const output1 = arr.filter(x => {
    if (x % 7 == 0)
        return x;

});
console.log(output1);


