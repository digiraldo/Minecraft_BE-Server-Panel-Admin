class RadioPlayer {
    constructor() {
        this.editMode = false;
        this.initThemeToggle();
        this.initEditMode();
        this.loadSavedPositions();
        this.initFullscreenToggle(); // Añadir esta línea
    }

    initEditMode() {
        const editButton = document.getElementById('edit-mode');
        const mapContainer = document.querySelector('.map-container');
        const infoCard = document.querySelector('.info-card');
        const players = document.querySelectorAll('.player-position');

        editButton.addEventListener('click', () => {
            this.editMode = !this.editMode;
            editButton.classList.toggle('active');
            mapContainer.classList.toggle('edit-mode');
            
            if (this.editMode) {
                this.enableDragging(infoCard);
                players.forEach(player => {
                    this.enableDragging(player);
                });
            } else {
                this.disableDragging(infoCard);
                players.forEach(player => {
                    this.disableDragging(player);
                });
            }
        });
    }

    enableDragging(element) {
        let offsetX, offsetY, isDragging = false;

        const onMouseDown = (e) => {
            if (!this.editMode) return;
            
            e.stopPropagation();
            isDragging = true;
            element.classList.add('dragging');

            const rect = element.getBoundingClientRect();
            const mapRect = document.querySelector('.map-container').getBoundingClientRect();
            
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;

            e.preventDefault();
            const mapContainer = document.querySelector('.map-container');
            const mapRect = mapContainer.getBoundingClientRect();
            
            let newX = e.clientX - mapRect.left - offsetX;
            let newY = e.clientY - mapRect.top - offsetY;

            // Limitar al área del mapa
            newX = Math.max(0, Math.min(newX, mapRect.width - element.offsetWidth));
            newY = Math.max(0, Math.min(newY, mapRect.height - element.offsetHeight));

            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
        };

        const onMouseUp = () => {
            if (!isDragging) return;
            
            isDragging = false;
            element.classList.remove('dragging');
            this.savePositions();
        };

        element.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        // Guardar los listeners para poder removerlos después
        element.dragListeners = { onMouseDown, onMouseMove, onMouseUp };
    }

    disableDragging(element) {
        if (element.dragListeners) {
            element.removeEventListener('mousedown', element.dragListeners.onMouseDown);
            document.removeEventListener('mousemove', element.dragListeners.onMouseMove);
            document.removeEventListener('mouseup', element.dragListeners.onMouseUp);
        }
    }

    savePositions() {
        const positions = {
            infoCard: {
                left: document.querySelector('.info-card').style.left,
                top: document.querySelector('.info-card').style.top
            },
            players: {}
        };

        document.querySelectorAll('.player-position').forEach(player => {
            positions.players[player.dataset.city] = {
                left: player.style.left,
                top: player.style.top
            };
        });

        localStorage.setItem('mapPositions', JSON.stringify(positions));
    }

    loadSavedPositions() {
        const savedPositions = localStorage.getItem('mapPositions');
        if (savedPositions) {
            const positions = JSON.parse(savedPositions);
            
            const infoCard = document.querySelector('.info-card');
            if (positions.infoCard) {
                infoCard.style.left = positions.infoCard.left;
                infoCard.style.top = positions.infoCard.top;
            }

            Object.entries(positions.players).forEach(([city, pos]) => {
                const player = document.querySelector(`[data-city="${city}"]`);
                if (player) {
                    player.style.left = pos.left;
                    player.style.top = pos.top;
                }
            });
        }
    }

    initThemeToggle() {
        const themeToggle = document.getElementById('theme-switch');
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            if (savedTheme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            themeToggle.innerHTML = newTheme === 'dark' 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
        });
    }

    initFullscreenToggle() {
        const fullscreenToggle = document.getElementById('fullscreen-toggle');
        const mapContainer = document.querySelector('.map-container');

        fullscreenToggle.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                mapContainer.requestFullscreen().catch(err => {
                    alert(`Error al intentar entrar en modo pantalla completa: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
}