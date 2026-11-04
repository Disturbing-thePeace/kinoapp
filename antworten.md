A1: Branch main, ea6a719

A2: antworten.md
        kasse.log
        den ordner test/
	
	Diese Dateien werden nicht im commit berücksichtigt.
	
A3: Der .git Ordner enthält die Metadaten für Git. Wenn man Ihn löscht,
wird das Git Repo weitestgehend gelöscht. Die Daten bleiben erhalten.
Möchte man die Daten wieder committen, muss man alles neu mit git init
initialisieren. Die Änderungschronik ist für immer verloren.

B1: git merge --ff-only feature/snacks
Updating ea6a719..5bbfa5a
Fast-forward
 snacks.md | 6 ++++++
 1 file changed, 6 insertions(+)
 create mode 100644 snacks.md
 
 Am Fast-forward.
 
B2: Da die Branch, die gemergt wird, ein direkter Nachfahre der Branch ist,
in welche gemergt wird.

C1: Der Kinderpreis gilt nur für Alter über 14 Jahre.

C2: git diff zeigt unterschiede zwischen commit und HEAD, nicht zwischen
letztem commit und staged. mit der Flag --staged kann man sich auch das 
anzeigen lassen.

D1: Weil noch nichts commited wurde. Dazugekommen ist der revert selbst.

D2: Weil die reverted-Änderungen wieder mit reingenommen und editiert werden 
können. 

E1: mit > wird die danch genannte Datei mit dem Input überschrieben. mit >> wird der 
Input an eine (optional existierende) Datei am Ende angehangen.

E2: Der Status zeigt nach anlegen der .gitignore die gitignore als untracked,
und nach git add .gitignore wieder das gleiche wie am Anfang.

F1: Weil Feature Branch neuer Titel nicht ein direkter Nachfahre vom aktuellen
main Branch ist.

F2: HEAD ist der branch, welcher aktuell editiert wird, noch vor dem staging.
feature/neuer-titel ist eine feature branch von main.

F3: Weil ein manueller Edit benötigt wurde. Die beiden index.html in den
verschiedenen Branches hatten verschiedene Stände in der Zeile mit der 
KinoApp, und git kann nicht einfach eine branch der anderen bevorzugen, ohne
vorher beim User nachzufragen.
Nach dem edit gibt es keinen Konflikt mehr und es funktioniert.

G1: Weil git status nur auf die lokalen Dateien rücksicht nimmt.

G2: fetch holt die neuste commit history von dem remote. Pull lädt die 
Änderungen mitsamt fetch herunter und mergt diese.

G3: Es fügt upstream die Tracking referenz hinzu. 

G4: Weil kontakt.md nicht in der main branch exisitierte bis die feature
branch auf github gemergt wurde.

