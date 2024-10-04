const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const mentalHealthSelect = document.getElementById('mental-health');
const severitySlider = document.getElementById('severity');
const frequencySelect = document.getElementById('frequency');
const durationSelect = document.getElementById('duration');
const otherIssueInput = document.getElementById('other-issue');
const severityValue = document.getElementById('severity-value');
const errorMessage = document.getElementById('error-message');

// Update severity value display
severitySlider.addEventListener('input', () => {
  severityValue.textContent = severitySlider.value;
});

// Validate form submission
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const mentalHealth = mentalHealthSelect.value;
  const severity = severitySlider.value;
  const frequency = frequencySelect.value;
  const duration = durationSelect.value;
  const otherIssue = otherIssueInput.value.trim();

if (username === '' || password === '') {
    errorMessage.textContent = 'Please fill in both username and password.';
    return;
  }

  if (mentalHealth === '') {
    errorMessage.textContent = 'Please select a mental health issue.';
    return;
  }

  if (mentalHealth === 'other' && otherIssue === '') {
    errorMessage.textContent = 'Please specify the mental health issue.';
    return;
  }

  if (severity === '') {
    errorMessage.textContent = 'Please select a severity level.';
    return;
  }

  if (frequency === '') {
    errorMessage.textContent = 'Please select a frequency.';
    return;
  }

if (duration === '') {
    errorMessage.textContent = 'Please select a duration.';
    return;
  }

  // TO DO: Implement actual login logic here
  // For demonstration purposes, assume login is successful
  errorMessage.textContent = '';
  alert('Login successful!');
  // Redirect to dashboard or next page
  // window.location.href = 'dashboard.html';
});
