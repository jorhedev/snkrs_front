const handlerFilterStock = (filter, stock) => {
    let data = stock;
    if (filter.color !== '') data = data.map((data) => data?.color?.name == filter.color ? data : null)
    if (filter.size !== '') data = data.map((data) => data?.size == filter.size ? data : null)
    const index = data.reduce((index, value, pos) => {
        if (value !== null) {
            index.push(pos);
        }
        return index;
    }, []);

    return index

}

export default handlerFilterStock