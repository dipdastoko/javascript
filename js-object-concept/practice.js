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
