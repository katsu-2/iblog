$(function(){
  //
  $fileField = $('#file')

  // 選択された画像を取得し表示
  $($fileField).on('change', $fileField, function(e) {
    //ファイルがあるかないか
    file = e.target.files[0]
    //ファイル操作したいときはFileReaderオブジェクト使う
    reader = new FileReader(),
    $preview = $("#img_field");

    reader.onload = (function(file) {
      return function(e) {
    //ファイルの履歴が残らないようにpreviewの子要素削除
        $preview.empty();

        $preview.append($('<img>').attr({
          src: e.target.result,
          width: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});
