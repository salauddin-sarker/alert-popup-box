// $(document).ready(function(){
//   $(".click").click(function(){
//     $(".popup_box").css({
//       "opacity":"1", "pointer-events":"auto"
//     });
//   });
//   $(".btn1").click(function(){
//     $(".popup_box").css({
//       "opacity":"0", "pointer-events":"none"
//     });
//   });
//   $(".btn2").click(function(){
//     $(".popup_box").css({
//       "opacity":"0", "pointer-events":"none"
//     });
//     alert("Your Account Deleted successfully.");
//     $(".click").text("Account Deleted");
//   });
//   $
// });

document.addEventListener("DOMContentLoaded", function() {
  // Function to show the popup box
  document.querySelector(".click").addEventListener("click", function() {
    var popupBox = document.querySelector(".popup_box");
    popupBox.style.opacity = "1";
    popupBox.style.pointerEvents = "auto";
  });

  // Function for button 1 (Cancel Process)
  document.querySelector(".btn1").addEventListener("click", function() {
    var popupBox = document.querySelector(".popup_box");
    popupBox.style.opacity = "0";
    popupBox.style.pointerEvents = "none";
  });

  // Function for button 2 (Delete Account)
  document.querySelector(".btn2").addEventListener("click", function() {
    var popupBox = document.querySelector(".popup_box");
    popupBox.style.opacity = "0";
    popupBox.style.pointerEvents = "none";
    alert("Your Account Deleted successfully.");
    document.querySelector(".click").textContent = "Account Deleted";
  });
});
