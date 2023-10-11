const handlerFieldStock = (colors, sizes) => {
    const objStock = [];

    for (const color of colors) {
        for (const size of sizes) {
            const obj = {
                color: colors[color],
                size: sizes[size],
                quantity: 0
            };
            objStock.push(obj);
        }
    }

    return objStock;
}

export default handlerFieldStock