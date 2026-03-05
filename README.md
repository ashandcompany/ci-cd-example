# Docker & Docker Compose

## Développement (Dev)

Lancer l'app avec hot reload :

```bash
docker compose up
```

Lancer en arrière-plan :

```bash
docker compose up -d
```

Arrêter les conteneurs :

```bash
docker compose down
```

Rebuild après modification des dépendances :

```bash
docker compose up --build
```

## Production

Builder l'image :

```bash
docker build -t ci-cd-example .
```

Lancer le conteneur :

```bash
docker run -p 3000:3000 ci-cd-example
```

Arrêter le conteneur (remplacer `ID` par l'ID du conteneur) :

```bash
docker stop ID
```

## Logs

Afficher les logs en dev :

```bash
docker compose logs -f
```

Afficher les logs d'un conteneur spécifique en prod :

```bash
docker logs ID -f
```

---

L'app sera accessible sur `http://localhost:3000`
