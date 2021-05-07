// Create git instance
const github = new GitHub;
// Create ui instance
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');
searchUser.textContent = "";

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  
  if(userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      });
    github.getRepoLatest(userText)
      .then(data =>  {
        if(data.repo.length === 0) {
          // Show alert
        } else {
          ui.showRepoLatest(data.repo);
        }
      });
    github.getRepo(userText)
      .then(data =>  {
        if(data.repo.length === 0) {
          // Show alert
        } else {
          ui.showRepoStars(data.repo);
        }
      });
  } else {
    // Clear profile
  }
})