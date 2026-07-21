const container = document.getElementById('sparkles-bg');
        for (let i = 0; i < 45; i++) {
            let spk = document.createElement('div');
            spk.className = 'sparkle';
            spk.style.left = Math.random() * 95 + 'vw';
            spk.style.top = Math.random() * 95 + 'vh';
            spk.style.width = spk.style.height = Math.random() * 12 + 8 + 'px'; 
            spk.style.animationDelay = Math.random() * 3 + 's';
            
            const colors = ['#ffffff', '#ffeed0', '#ff4d4d', '#00b4d8', '#ffd700'];
            spk.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(spk);
        }

        function nextPage(num) {
            var audio = document.getElementById('bg-music');
            if (audio.paused) {
                audio.play().catch(e => console.log("audio blocked"));
            }

            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('p' + num).classList.add('active');

            if (num === 3) {
                document.getElementById('signature').style.display = 'block';
            } else {
                document.getElementById('signature').style.display = 'none';
            }
        }

        function showCaught() {
            document.getElementById('p1').classList.remove('active');
            document.getElementById('p1-caught').classList.add('active');
        }

        function resetP1() {
            document.getElementById('p1-caught').classList.remove('active');
            document.getElementById('p1').classList.add('active');
            document.getElementById('signature').style.display = 'none';
        }

        function moveNever() {
            var btn = document.getElementById('never-btn');
            var padX = 140; 
            var padY = 60;
            
            var x = Math.random() * (window.innerWidth - padX);
            var y = Math.random() * (window.innerHeight - padY);
            
            if (x < 20) x = 20;
            if (y < 20) y = 20;

            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }
