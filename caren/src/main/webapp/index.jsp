<!DOCTYPE html>
<html lang="en">

	<body>
		<%
		if (session.getAttribute("aid") != null) {
			response.sendRedirect("../posts/");
		}
		%>
	</body>
	<script>
		window.onload = function() {
			location.href = "../welcome/index.jsp";
		}
	</script>
</html>