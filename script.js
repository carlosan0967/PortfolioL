// Terminal typing animation
const lines = [
    { key: '  "nombre"', val: '"Carlos Andres Lindarte"' },
    { key: '  "rol"', val: '"Fullstack Developer Jr."' },
    { key: '  "stack"', val: '["Python","JS","MySQL"]' },
    { key: '  "ciudad"', val: '"Bucaramanga, CO 🇨🇴"' },
    { key: '  "status"', val: '"buscando oportunidades"' },
  ];

  const container = document.getElementById('t-lines');
  let i = 0;

  function addLine(line, callback) {
    const el = document.createElement('div');
    el.innerHTML = `<span class="t-key">${line.key}</span>: <span class="t-str">${line.val}</span>,`;
    el.style.opacity = '0';
    container.appendChild(el);
    setTimeout(() => {
      el.style.transition = 'opacity 0.3s';
      el.style.opacity = '1';
      if (callback) setTimeout(callback, 280);
    }, 50);
  }

  function runTerminal() {
    if (i < lines.length) {
      addLine(lines[i], () => {
        i++;
        runTerminal();
      });
    }
  }

  setTimeout(runTerminal, 800);