function List(){
    const fruits=['apple','banana','orange','jamun','sapota'];
    const listitems=fruits.map(fruit => <li>{fruit}</li>);
    return(
        <ul>{listitems}</ul>
    )
}
export default List;