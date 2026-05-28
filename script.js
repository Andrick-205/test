// DARK MODE

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    toggle.innerHTML = "☀";
  }else{
    toggle.innerHTML = "🌙";
  }
});


// CHART

const ctx = document.getElementById('salesChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [{
      label: 'Ventas',
      data: [1200, 1900, 3000, 2500, 4200, 5000],
      borderWidth: 3,
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37,99,235,0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive:true
  }
});
