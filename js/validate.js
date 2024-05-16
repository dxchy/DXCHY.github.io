function submitMessage() {
            var name = document.getElementById("name").value;
            var message = document.getElementById("message").value;

            // 创建一个新的留言元素并添加到留言板上
            var messageDiv = document.createElement("div");
            messageDiv.innerHTML = "<p><strong>" + name + "：</strong>" + message + "</p>";

            document.getElementById("messages").appendChild(messageDiv);

            // 清空输入框
            document.getElementById("name").value = "";
            document.getElementById("message").value = "";
        }