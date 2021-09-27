const products = [
    'laptop Dell hardcore i9 laptop',
    'iphone 1tb camera flashlight phone',
    'yellow laptop with black camera',
    'lenevo commercial laptop yoga',
    'lg supernova laptop',
    'htc low price phone',
    'purple color phone with laptop'
];

const searching = 'laptop';

const output = [];

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
