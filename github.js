class GitHub {
  constructor() {
    this.client_id = ''; // Your Client id
    this.secret_key =  ''; // Your Secret Key
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret_key}`);
    
    const profile = await profileResponse.json();
    return {
      profile
    };
  }

  async getRepoLatest(user) {
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.secret_key}`);
    
    const repo = await repoResponse.json();
    repo.sort(function (a, b) {
      return b.created_at.localeCompare(a.created_at);
    });
    
    return {
      repo
    };
  }

  async getRepoStars(user) {
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.secret_key}`);
    
    const getRepo = await repoResponse.json();
    let repo = getRepo.sort(function(a, b) {return b.stargazers_count - a.stargazers_count});
    
    return {
      repo
    };
  }
}
