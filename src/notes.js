// render() {
//     var content = [
//         "content 1", "content 2", "content 3", "content 4", "content 5",
//         "content 6", "content 7", "content 8", "content 9", "content 10"
//     ];
//     var groupSize = 3;
//     var rows = content.map(function(content) {
//         map content to html elements
//         return <div className="col-md-4">{content}</div>;
//     }).reduce(function(r, element, index) {
//         create element groups with size 3, result looks like:
//         [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
//         index % groupSize === 0 && r.push([]);
//         r[r.length - 1].push(element);
//         return r;
//     }, []).map(function(rowContent) {
//         surround every group with 'row'
//         return <div className="row">{rowContent}</div>;
//     });
//     return <div className="container">{rows}</div>;
// }