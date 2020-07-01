<!DOCTYPE html>
<html lang="en">

	<body>
		<%
		if (session.getAttribute("aid") != null) {
			response.sendRedirect("/caren/posts/");
		}
		%>
	</body>
	<script>
		window.onload = function() {
			location.href = "/caren/welcome/index.jsp";
		}
	</script>
</html>