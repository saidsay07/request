window.addEventListener("DOMContentLoaded", async function () {
    await getTasks()
    await postTask()
    await patchTask()
    await deleteTask()
})

async function getTasks() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=2")
        const tasks = await response.json()

        console.log(tasks)
    } catch (error) {
        console.error("error: ", error)
    }
}

async function postTask() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "New tasks",
                completed: false
            })
        })
        const task = await response.json()

        console.log(task)
    } catch (error) {
        console.error("error: ", error)
    }
}

async function patchTask() {
    try {
        const response =  await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: true})
        })
        const task = await response.json()

        console.log(task)
    } catch (error) {
        console.error("error: ", error)
    }
}

async function deleteTask(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/2`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const task = await response.json()

        if (task) {
            // document.querySelector(`#task${id}`).remove()
        }

        console.log(task)
    } catch (error) {
        console.error("error: ", error)
    }
}