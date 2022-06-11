import React from 'react'
import './SingleMeaning.css';

const SingleMeaning = ({ searchData, mode }) => {
    return (
        searchData.map((currentSearchData) =>
          currentSearchData.meanings.map((meaning) =>
            meaning.definitions.map((def) => (
              <div className='singleMeaning' style={{ backgroundColor: mode === 'dark' ? '#282c34' : 'whitesmoke', color: mode === 'dark' ?  'whitesmoke' : '#282c34' }}>
                <b>{def.definition}</b>
                {
                    def.example || def.synonyms.length > 0 ? (<hr style={{ backgroundColor: mode === 'dark' ? '#282c34' : 'whitesmoke', width: '100%' }} />) : (<></>)
                }
                {
                    def.example && (
                        <span>
                                <b>Example - </b> { def.example }
                        </span>
                    )
                }
                {
                    def.synonyms.length > 0 ? (
                        <span>
                            <b>Synonyms - </b> { def.synonyms.map(synonym => `${synonym}, `) }
                        </span>
                    ) : (<></>)
                }
              </div>
            ))
          )
        )
    )
}

export default SingleMeaning
