# Git Commands для проекта Landing Vlad

## Основные команды

### Инициализация и настройка
```bash
# Инициализация git репозитория
git init

# Настройка пользователя (если не настроено глобально)
git config user.email "vlad@example.com"
git config user.name "Vladislav Anishchenko"

# Привязка к удаленному репозиторию
git remote add origin https://git.c11.online/c11online/landing-vlad.git

# Проверка удаленных репозиториев
git remote -v
```

### Работа с изменениями
```bash
# Показать статус изменений
git status

# Добавить все изменения
git add .

# Добавить конкретный файл
git add путь/к/файлу

# Создать коммит
git commit -m "Описание изменений"

# Показать историю коммитов
git log --oneline -10
```

### Работа с ветками
```bash
# Создать новую ветку
git checkout -b имя-ветки

# Переключиться на ветку
git checkout имя-ветки

# Список веток
git branch

# Удалить ветку
git branch -d имя-ветки
```

### Синхронизация с удаленным репозиторием
```bash
# Загрузить изменения с удаленного репозитория
git pull origin main

# Отправить изменения в удаленный репозиторий
git push origin main

# Отправить изменения с созданием связи ветки
git push -u origin имя-ветки

# Принудительная отправка (использовать с осторожностью!)
git push origin main --force
```

### Полезные команды
```bash
# Показать изменения в файлах
git diff

# Показать изменения конкретного файла
git diff путь/к/файлу

# Отменить изменения в файле (до добавления в staging)
git checkout -- путь/к/файлу

# Удалить файл из staging (но оставить в рабочей директории)
git reset путь/к/файлу

# Создать тег версии
git tag v1.0.0
git push origin v1.0.0
```

## Рабочий процесс

### Стандартный workflow
1. **Проверить статус**: `git status`
2. **Добавить изменения**: `git add .` или `git add путь/к/файлу`
3. **Создать коммит**: `git commit -m "Описание изменений"`
4. **Загрузить изменения с сервера**: `git pull origin main`
5. **Отправить изменения**: `git push origin main`

### Работа с новой функцией
1. **Создать ветку**: `git checkout -b feature/название-фичи`
2. **Работать над изменениями**
3. **Добавить и закоммитить**: `git add . && git commit -m "Добавлена фича"`
4. **Переключиться на main**: `git checkout main`
5. **Обновить main**: `git pull origin main`
6. **Вернуться в ветку**: `git checkout feature/название-фичи`
7. **Смержить изменения из main**: `git merge main`
8. **Решить конфликты (если есть)**
9. **Отправить ветку**: `git push -u origin feature/название-фичи`
10. **Создать Pull Request на git.c11.online**

## Решение проблем

### Если push отклонен
```bash
# Сначала загрузить изменения
git pull origin main

# Если есть конфликты, решить их
# Затем снова отправить
git push origin main
```

### Если нужно отменить последний коммит (локально)
```bash
# Сохранить изменения, но отменить коммит
git reset --soft HEAD~1

# Полностью удалить последний коммит
git reset --hard HEAD~1
```

### Если забыли добавить файлы в коммит
```bash
# Добавить забытые файлы
git add забытый-файл

# Создать новый коммит с теми же изменениями
git commit --amend --no-edit
```

## Быстрые команды (aliases)

Добавить в `~/.gitconfig`:
```ini
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  lg = log --oneline --graph --all
  last = log -1 HEAD
  unstage = reset HEAD --
```
