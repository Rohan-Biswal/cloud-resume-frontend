fetch("https://visitor-counter-5bavbsigpq-el.a.run.app")
    .then(res => res.json())
    .then(data => {
        document.getElementById("counter").innerText =
            "Visitor Count: " + data.visitor_count;
    });