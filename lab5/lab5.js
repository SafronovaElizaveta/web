function openForm_1() {
  document.getElementById("text_1").style.visibility = "visible"; }
function openForm_2() {
  document.getElementById("text_2").style.visibility = "visible"; }
function openForm_3() {
  document.getElementById("text_3").style.visibility = "visible"; }



  const b = document.getElementById('text_1')
  b.addEventListener('click', function () 
                     {
                        document.getElementById('text_1').style.visibility = 'hidden';
                    })

  const a = document.getElementById('text_2')
  a.addEventListener('click', function () 
                     {
                        document.getElementById('text_2').style.visibility = 'hidden';
                    })

 const c = document.getElementById('text_3')
  c.addEventListener('click', function () 
                     {
                        document.getElementById('text_3').style.visibility = 'hidden';
                    })