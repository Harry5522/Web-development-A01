
function calculateTotal() {
  const price = parseFloat(document.getElementById("price").value);
  const liters = parseFloat(document.getElementById("liters").value);
  const total = price * liters;

  document.getElementById("total").textContent = `Total: AED ${total.toFixed(2)}`;
}
