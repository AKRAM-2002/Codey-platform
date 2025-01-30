tâches = [
    {"nom": "Tâche 1", "priorité": "élevée", "durée": 30},
    {"nom": "Tâche 2", "priorité": "moyenne", "durée": 20},
    {"nom": "Tâche 3", "priorité": "élevée", "durée": 10},
]

def trier_tâches(tâches):
    if len(tâches) > 50:
        raise ValueError("Le nombre de tâches ne peut pas dépasser 50.")
    priorité_ordre = {"élevée": 1, "moyenne": 2, "faible": 3}
    return sorted(tâches, key=lambda x: (priorité_ordre[x["priorité"]], x["durée"]))

tâches_triées = trier_tâches(tâches)
for tâche in tâches_triées:
    print(tâche)