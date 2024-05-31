let projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        let h3 = project.children[0];
        let p = project.children[1];
        h3.style.display = "None";
        p.style.display = "grid";
    });
    project.addEventListener('mouseout', () => {
        let h3 = project.children[0];
        let p = project.children[1];
        h3.style.display = "grid";
        p.style.display = "None";
    });
});
