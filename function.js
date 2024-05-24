function googleSearch() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    if (input == 'aven sy' || input == 'aven' || input == 'avensy'){
        window.open("search-avensy.html", "_self");
    } else if (input == 'projects' || input == 'project'){
        window.open("search-projects.html", "_self")
    } else if (input == 'aboutme' || input == 'about' || input == 'about me'){
        window.open("search-aboutme.html", "_self")
    } else if (input == 'contact' || input == 'contact me' || input == 'contacts'){
        window.open("search-contactme.html", "_self")
    } else if (input == 'linkedin'){
        window.open("search-linkedin.html", "_self")
    } else if (input == 'resumes' || input == 'resume'){
        window.open("search-resume.html", "_self")
    } else if (input == 'gitlab' || input == 'git' || input == 'github'){
        window.open("search-gitlab.html", "_self")
    } else if (input == '') {
        alert('Nothing was entered');
    } else {
        alert('No results found');
    }
  }
  