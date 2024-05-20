// Custom JavaScript to dynamically load module content and community discussions

// Example data - In a real application, this would come from an API
const modules = {
    1: {
        title: "Your Basic Rights",
        content: "Content about basic child rights fetched from Wikipedia or other reliable sources."
    },
    2: {
        title: "Education Rights",
        content: "Content about education rights fetched from Wikipedia or other reliable sources."
    },
    3: {
        title: "Safety and Protection",
        content: "Content about safety and protection fetched from Wikipedia or other reliable sources."
    }
};

// Function to load a module
function loadModule(moduleId) {
    const module = modules[moduleId];
    if (module) {
        alert(`Loading Module: ${module.title}\n\n${module.content}`);
    } else {
        alert('Module not found.');
    }
}

// Simulated community discussions data
const discussions = [
    { user: "Alice", message: "How can I learn more about my rights?" },
    { user: "Bob", message: "What should I do if my rights are violated?" },
    { user: "Charlie", message: "Can someone explain the right to education?" }
];

// Function to load community discussions
function loadDiscussions() {
    const discussionsContainer = document.getElementById('community-discussions');
    discussionsContainer.innerHTML = '';
    discussions.forEach(discussion => {
        const discussionElement = document.createElement('div');
        discussionElement.className = 'list-group-item list-group-item-action';
        discussionElement.innerHTML = `<strong>${discussion.user}:</strong> ${discussion.message}`;
        discussionsContainer.appendChild(discussionElement);
    });
}

// Load discussions on page
