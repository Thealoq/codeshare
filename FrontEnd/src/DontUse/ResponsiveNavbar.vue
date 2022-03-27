<template>
    <div class="navtwo">
   <header>
		<h1 style="color:white;" class="logo">CodeShare</h1>
		<input type="checkbox" id="nav-toggle" class="nav-toggle">
		<nav>
			<ul> 
        <li><router-link to="/">Home</router-link></li>
				<li><router-link to="/codes">Codes</router-link></li>
				<li><router-link to="/special">Special Member</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link id="logout" v-on:click="Logout" to="/log">Logout</router-link></li>
        <li><a id="log" href="https://discord.com/api/oauth2/authorize?client_id=957001632531488778&redirect_uri=http://localhost:3000/callback&response_type=code&scope=identify">Login</a></li>
			</ul>
		</nav>
		<label for="nav-toggle" class="nav-toggle-label">
			<span></span>
		</label>
	</header>




    </div>
</template>

<script>

export default {
    name: "ResponsiveNavbar",
    data() {
        return {
            items:[],
        };
    },
    methods: {
        Logout() {
            window.localStorage.removeItem("token");
            window.location.href = "/";
        }
    },
    created() {
    const token = window.localStorage.getItem("token");

    if (token) {
       setTimeout(function () {
       document.getElementById("log").style.display = "none"
      }, 100)
    } else {
        setTimeout(function () {
       document.getElementById("logout").style.display = "none"
      }, 100)
    }

  }
}
</script>



<style scoped>


*, *::before, *::after {
  box-sizing: border-box;
}


header {
  background-color:#111728;
	text-align: center;
	position: fixed;
	width: 100%;
	z-index: 999;
}

.nav-toggle {
	display: none;
}

.nav-toggle-label {
	position: absolute;
	top: 0;
	left: 0;
	margin-left: 1em;
	height: 100%;
	display: flex;
	align-items: center;
}

nav {
	position: absolute;
	text-align: left;
	top: 100%;
	left: 0;
	background-color: #1a1f2d;
	width: 100%;
	transform: scale(1, 0);
	transform-origin: top;
	transition: transform 400ms ease-in-out;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
	display: block;
	background: white;
	height: 2px;
	width: 2em;
	border-radius: 2px;
	position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
	content: '';
	position: absolute;
}	

.nav-toggle-label span::before {
	bottom: 7px;
}

.nav-toggle-label span::after {
	top: 7px;
}

nav ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

nav li {
	margin-bottom: 1em;
	margin-left: 1em;
}

nav a {
	color: white;
	text-decoration: none;
	font-size: 1.2rem;
	text-transform: uppercase;
	opacity: 0;
	transition: opacity 150ms ease-in-out;
}

nav a:hover {
	color:#000;
}

.nav-toggle:checked ~ nav {
	transform: scale(1,1);
}

.nav-toggle:checked ~ nav a {
	opacity: 1;
	transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px) {
	.nav-toggle-label {
		display: none;
	}

	header {
		display: grid;
		grid-template-columns: 1fr auto minmax(600px, 1fr) 1fr;
	}

	.logo {
		grid-column: 2 / 3;
	}

	nav {
		all: unset;
		grid-column: 3 / 4;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	nav ul {
		display: flex;
	}

	nav li {
		margin-left: 3em;
		margin-bottom: 0
	}

	nav a {
		opacity: 1;
		position: relative;
	}

	nav a::before {
		content: '';
		display: block;
		height: 5px;
		background: black;
		position: absolute;
		top: -.75em;
		left: 0;
		right: 0;
		transform: scale(0, 1);
		transition: transform ease-in-out 250ms;
	}

	nav a:hover::before {
		transform: scale(1,1);
	}
}
</style>

