function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comments => commentFunction(comments))
}

function commentFunction(comments) {
    const postContainer = document.getElementById('comment-li');
    for (const comment of comments) {
        const div = document.createElement('div');
        console.log(comment);
        div.classList.add('comment');
        div.innerHTML = `
        <h2>Title ${comment.name}</h2>
        <p>Post ${comment.body}</p>
        `
        postContainer.appendChild(div);
        console.log(div);

    }
}