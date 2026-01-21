import './style.css'
import { stories } from './data/stories.js'

const app = document.querySelector('#app')
let state = {
  view: 'home', // 'home' or 'story'
  currentStoryId: null
}

function navigateTo(view, storyId = null) {
  state.view = view
  state.currentStoryId = storyId
  render()
  window.scrollTo(0, 0)
}

function renderHome() {
  const container = document.createElement('div')
  container.className = 'container'

  const header = document.createElement('header')
  header.innerHTML = `
    <h1 class="flicker-text">Creepy Horror Stories</h1>
    <p style="text-align: center; color: var(--color-text-dim); margin-bottom: 3rem;">
      Tales from the dark corners of the mind.
    </p>
  `

  const grid = document.createElement('div')
  grid.style.display = 'grid'
  grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))'
  grid.style.gap = '2rem'

  stories.forEach(story => {
    const card = document.createElement('div')
    card.className = 'story-card'
    Object.assign(card.style, {
      background: 'var(--color-surface)',
      padding: '1.5rem',
      borderRadius: '8px',
      border: '1px solid #333',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, border-color 0.3s ease'
    })

    // Hover effects via JS for more complex interactions if needed, but CSS is fine too.
    card.onmouseover = () => {
      card.style.transform = 'translateY(-5px)'
      card.style.borderColor = 'var(--color-accent)'
      card.style.boxShadow = 'var(--shadow-glow)'
    }
    card.onmouseout = () => {
      card.style.transform = 'translateY(0)'
      card.style.borderColor = '#333'
      card.style.boxShadow = 'none'
    }

    card.innerHTML = `
      <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${story.title}</h2>
      <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 0.9rem; color: var(--color-text-dim);">
        <span>${story.author}</span>
        <span>${story.date}</span>
      </div>
      <p style="margin-bottom: 1.5rem; color: #bbb;">${story.summary}</p>
      <div>
        ${story.tags.map(tag => `<span style="display: inline-block; background: #222; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 5px; color: var(--color-accent); border: 1px solid #444;">#${tag}</span>`).join('')}
      </div>
    `

    card.onclick = () => navigateTo('story', story.id)
    grid.appendChild(card)
  })

  container.appendChild(header)
  container.appendChild(grid)
  return container
}

function renderStory(storyId) {
  const story = stories.find(s => s.id === storyId)
  if (!story) {
    return renderHome() // Fallback
  }

  const container = document.createElement('div')
  container.className = 'container story-view'
  container.style.maxWidth = '800px'
  container.style.margin = '0 auto'

  const backBtn = document.createElement('button')
  backBtn.innerText = '← Return to Safety'
  backBtn.onclick = () => navigateTo('home')

  const content = document.createElement('article')
  content.style.marginTop = '3rem'
  content.innerHTML = `
    <h1 style="text-align: left; font-size: 3rem;">${story.title}</h1>
    <div style="border-bottom: 1px solid var(--color-accent); padding-bottom: 1rem; margin-bottom: 2rem; color: var(--color-text-dim);">
      By ${story.author} • ${story.date}
    </div>
    <div class="story-body" style="font-size: 1.2rem; line-height: 1.8; color: #ddd;">
      ${story.content}
    </div>
  `

  container.appendChild(backBtn)
  container.appendChild(content)
  return container
}

function render() {
  app.innerHTML = ''
  if (state.view === 'home') {
    app.appendChild(renderHome())
  } else if (state.view === 'story') {
    app.appendChild(renderStory(state.currentStoryId))
  }
}

// Initial Render
render()
