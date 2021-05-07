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
        <b>Name:<h5 class="text-primary"> ${user.name}</h5></b>
        <b>Followers:<h5 class="text-primary"> ${user.followers}</h5></b>
        <b>Following:<h5 class="text-primary"> ${user.following}</h5></b>
        <b>Public Repos:<h5 class="text-primary"> ${user.public_repos}</h5></b>
        <b>Location:<h5 class="text-primary"> ${user.location}</h5></b>
        <b>Company:<h5 class="text-primary"> ${user.company}</h5></b>
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
        <li class="list-group-item text-danger bg-dark" aria-current="true"><b>Latest Repos</b></li>
        <li class="list-group-item"><b>${repo[0].name}</b><span class="badge bg-warning">${repo[0].stargazer_count}</span></li>
        <li class="list-group-item"><b>${repo[1].name}</b><span class="badge bg-warning">${repo[1].stargazer_count}</span></li>
        <li class="list-group-item"><b>${repo[2].name}</b><span class="badge bg-warning">${repo[2].stargazer_count}</span></li>
        <li class="list-group-item"><b>${repo[3].name}</b><span class="badge bg-warning">${repo[3].stargazer_count}</span></li>
        <li class="list-group-item"><b>${repo[4].name}</b><span class="badge bg-warning">${repo[4].stargazer_count}</span></li>
      </ul>
      `;
    }
  }
}