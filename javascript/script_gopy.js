/** @format */

function gopy() {
  var arr = document.getElementsByTagName("input");
  var arr2 = document.getElementsByTagName("textarea");
  if (arr[0].value && arr[1].value && arr2[0].value)
    alert(
      "Bạn đã góp ý thành công với nội dung" +
        "\n" +
        "Họ và tên: " +
        arr[0].value +
        "\n" +
        "E-mail: " +
        arr[1].value +
        "\n" +
        "Chi tiết mô tả:\n" +
        arr2[0].value
    );
}
