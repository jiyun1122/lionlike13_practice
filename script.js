document.getElementById("plus").addEventListener("click", () => {
  document.querySelectorAll(".cost").forEach((cost) => {
      cost.innerHTML = parseInt(cost.innerHTML) + 10000;
  });
  document.querySelectorAll(".total-cost").forEach((total_cost) => {
      total_cost.innerHTML = parseInt(total_cost.innerHTML) + 100000;
  });
});


document.getElementById("minus").addEventListener("click", () => {
  document.querySelectorAll(".cost").forEach((cost) => {
      cost.innerHTML = parseInt(cost.innerHTML) - 10000;
  });
  document.querySelectorAll(".total-cost").forEach((total_cost) => {
      total_cost.innerHTML = parseInt(total_cost.innerHTML) - 100000;
  });
});