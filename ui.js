class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.otherStats   = document.getElementById('otherStats');
    this.latestRepos  = document.getElementById('latestRepos');
    this.starredRepos = document.getElementById('starredRepos');

    this.img = document.getElementById('gitHubLogo');
    this.userLabel = document.getElementById('userLabel');
    this.userLink  = document.getElementById('userLink');
  }

  showProfile(user) {
    if(user.name !== null) {
      profile.innerHTML = 
      `
      <div class="flexBox">
        <b>Name:<span class="text-primary"> ${user.name}</span></b><br>
        <b>Followers:<span class="text-primary"> ${user.followers}</span></b><br>
        <b>Following:<span class="text-primary"> ${user.following}</span></b><br>
        <b>Public Repos:<span class="text-primary"> ${user.public_repos}</span></b><br>
        <b>Location:<span class="text-primary"> ${user.location}</span></b><br>
        <b>Company:<span class="text-primary"> ${user.company}</span></b>
      </div>
      `;
  
      this.img.src = user.avatar_url;
      this.userLabel.textContent = user.login;
      this.userLink.href = user.html_url;
    }
  }

  showRepoLatest(repo) {
    if(repo.length !== 0) {
      console.log(repo)
      latestRepos.innerHTML = 
      `
      <ul class="list-group">
        <li class="list-group-item text-danger bg-dark" aria-current="true"><b>Latest Repos</b></li>
        <li class="list-group-item"><b>${repo[0].name}</b><span class="badge bg-danger">${repo[0].created_at}</span></li>
        <li class="list-group-item"><b>${repo[1].name}</b><span class="badge bg-danger">${repo[1].created_at}</span></li>
        <li class="list-group-item"><b>${repo[2].name}</b><span class="badge bg-danger">${repo[2].created_at}</span></li>
        <li class="list-group-item"><b>${repo[3].name}</b><span class="badge bg-danger">${repo[3].created_at}</span></li>
        <li class="list-group-item"><b>${repo[4].name}</b><span class="badge bg-danger">${repo[4].created_at}</span></li>
      </ul>
      `;
    }
  }

  showRepoStars(repo) {
    if(repo.length !== 0) {
      console.log(repo)
      starredRepos.innerHTML = 
      `
      <ul class="list-group">
        <li class="list-group-item text-danger bg-dark" aria-current="true"><b>Most Starred Repos</b></li>
        <li class="list-group-item"><b>${repo[0].name}</b><span class="badge bg-warning">${repo[0].stargazers_count}</span></li>
        <li class="list-group-item"><b>${repo[1].name}</b><span class="badge bg-warning">${repo[1].stargazers_count}</span></li>
        <li class="list-group-item"><b>${repo[2].name}</b><span class="badge bg-warning">${repo[2].stargazers_count}</span></li>
        <li class="list-group-item"><b>${repo[3].name}</b><span class="badge bg-warning">${repo[3].stargazers_count}</span></li>
        <li class="list-group-item"><b>${repo[4].name}</b><span class="badge bg-warning">${repo[4].stargazers_count}</span></li>
      </ul>
      `;
    }
  }
}