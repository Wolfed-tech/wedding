import React from 'react'

type Props = {}

const QuizPopup = (props: Props) => {
    return (
        <div>
            <form>
                <legend>Подтвердите своё присутствие</legend>
                <input type='radio' id='comingYes' name='coming' />
                <label htmlFor="comingYes">Я приду один.</label>
                <input type='radio' id='comingNo' name='coming' />
                <label htmlFor="comingNo">К сожалению не смогу.</label>
                <input type='radio' id='comingYesFamily' name='coming' />
                <label htmlFor="comingYesFamily">Я приду с семьёй / парой</label>
                <textarea>Имена гостей:</textarea>
            </form>

            <form>
                <legend>Вам есть где разместиться (на время праздничных дней)?</legend>
                <input type='radio' id='placementyes' name='placement' />
                <input type='radio' id='placementno' name='placement' />
            </form>
            <form>
                <legend>Вы пъёте алкоголь (если "Да" - укажите какой)?</legend>
                
            </form>
        </div>
    )
}

export default QuizPopup