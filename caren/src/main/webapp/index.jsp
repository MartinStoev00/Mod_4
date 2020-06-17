<!DOCTYPE html>
<html lang="en">

	<body>
		<%
		if (session.getAttribute("aid") != null) {
			response.sendRedirect("http://localhost:8080/caren/posts/");
		}
		%>
	</body>
<script>
	window.onload = function() {
		location.href = "http://localhost:8080/caren/welcome/index.jsp";
	}
</script>
</html>