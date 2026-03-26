// Este código "exporta" o componente para o objeto global 'window'
window.renderRemoteButton = (containerId) => {
  const container = document.getElementById(containerId);
  
  const style = `
    <style>
      .btn-mfe { 
        background: #0070f3; color: white; border: none; 
        padding: 10px 20px; border-radius: 5px; cursor: pointer; 
      }
      .btn-mfe:hover { background: #0051af; }
    </style>
  `;

  container.innerHTML = `${style}<button class="btn-mfe">Botão Independente</button>`;
};
