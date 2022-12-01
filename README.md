# Journal

This project was build for generating a Google Calendar link by giving the input.

Currently **not** published for **other users**.

Built with `TypeScript` and with basics of `React` 

### Technologies
Language    | Framework     | Database      | Feat.       | Feat.
----------- | -----------   | -----------   | ----------  | -----------
<img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/TypeScript.svg" alt="drawing" width="75" /> | <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/React.svg" alt="drawing" width="75"/> | <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Technologies/Firebase.svg" alt="drawing" width="75"/> |  <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Sheets.svg" alt="drawing" width="75"/> |<img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Calendar.svg" alt="drawing" width="75"/> |
TypeScript  | React         | Firebase      | Sheets     | Calendar

[![wakatime](https://wakatime.com/badge/user/94eceae7-683a-4d18-a44b-59d4ffd2eb5d/project/564d5748-2bf1-43f3-b8a3-52d9dbaa02ee.svg)](https://wakatime.com/@pratikkabade/projects/gjodqsatdd)

### Note

1. For inputting the date, use the format `MM-DD-YYYY` (eg: 12-31-2020)

2. To convert **Google Calendar** `ics` file to `csv` file, use the [Open ICS](https://openicsfile.com/csv-convert.html)

    - Select `dtstart`, `dtend`, `summary` and if required `description`

3. Then use following command to *convert dates* to *required input*
```
="{from: '"&TEXT(A2,"mm-dd-yyyy")&"', to: '"&TEXT(B2,"mm-dd-yyyy")&"'},"
```

### Screenshot

![image](https://user-images.githubusercontent.com/76637730/204713427-97f85098-b6ba-4619-b8db-8f776cf330a5.png)
