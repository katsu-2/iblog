$(function(){
  //
  $fileField = $('#file')

  // 選択された画像を取得し表示
  $($fileField).on('change', $fileField, function(e) {
    //読み込んだファイル情報を取得
    file = e.target.files[0]
    console.log(file);
    //ファイル操作したいときはFileReaderインスタンスを作成する
    reader = new FileReader(),
    $preview = $("#img_field");
    //onloadは画像などのリソースを読み込んで処理を実行するのに利用
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
