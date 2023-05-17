import React from "react";

const OutputBox = ({ data }) => {
  console.log(data);
  if (!data) {
    return null; // If data is not available, don't render anything
  }

  return (
    <div className="flex flex-col min-w-[500px] min-h-[500px] m-10 border bg-stone-200 border-solid rounded-xl border-cyan-500 transform transition-transform hover:scale-95">
      <div className="p-5">
        <p className="text-2xl font-bold">
          Toxic: {data.toxic ? "TRUE" : "FALSE"}
        </p>
        <p className="text-2xl font-bold ml-5">
          Severe Toxic: {data.severe_toxic ? "TRUE" : "FALSE"}
        </p>
      </div>
      <div className="p-5">
        <p className="text-2xl font-bold">
          Obscene: {data.obscene ? "TRUE" : "FALSE"}
        </p>
        <p className="text-2xl font-bold ml-5">
          Threat: {data.threat ? "TRUE" : "FALSE"}
        </p>
      </div>
      <div className="p-5">
        <p className="text-2xl font-bold">
          Insult: {data.insult ? "TRUE" : "FALSE"}
        </p>
        <p className="text-2xl font-bold ml-5">
          Identity Hate: {data.identity_hate ? "TRUE" : "FALSE"}
        </p>
      </div>
      {data.insult ||
      data.identity_hate ||
      data.threat ||
      data.obscene ||
      data.toxic ? (
        <div className="flex flex-col bg-red-800 text-white p-5 min-h-[400px] mt-5">
          {data.toxic && (
            <div>
              <p className="text-lg">
                A toxic sentence can evoke various negative reactions from
                people, such as anger, hurt, offense, defensiveness, sadness,
                frustration, or disbelief. It has the potential to create
                conflict, damage relationships, and harm overall communication.
              </p>
            </div>
          )}
          {data.toxic && data.obscene && (
            <div className="mt-5">
              <p className="text-lg">
                When someone uses toxic and obscene words, people commonly react
                with a range of emotions, including shock, offense, disgust,
                anger, or disdain. They may express their disapproval, confront
                the person using such language, or distance themselves from the
                situation altogether. The specific reaction can vary depending
                on the individuals involved, their personal values, cultural
                background, and the context in which the offensive language was
                used.
              </p>
            </div>
          )}
          {data.toxic && data.threat && (
            <div className="mt-5">
              <p className="text-lg">
                Combining toxic language with threats can escalate the negative
                reactions even further. When someone uses a toxic and
                threatening statement, people may respond with fear, anxiety,
                alarm, and a sense of personal safety being compromised. They
                may take the threat seriously and seek protective measures, such
                as reporting the incident to authorities or taking legal action
                if necessary. Threats can also intensify feelings of anger,
                betrayal, and the desire for self-defense, potentially leading
                to confrontations or strained relationships. It is important to
                address such situations responsibly and ensure the safety and
                well-being of all parties involved.
              </p>
            </div>
          )}
          {data.toxic && data.identity_hate && (
            <div className="mt-5">
              <p className="text-lg">
                Combining toxic language with identity-based hate can have
                severe and harmful consequences. When someone engages in toxic
                and hateful speech targeting a person's identity, such as their
                race, ethnicity, gender, sexual orientation, religion, or any
                other characteristic, it can lead to deep emotional pain,
                psychological distress, and a sense of marginalization or
                discrimination. The impact of identity-based hate can vary
                widely, but common reactions include feelings of anger, fear,
                sadness, hurt, and a loss of trust. It can further perpetuate
                stereotypes, create division, and contribute to a hostile
                environment. It is crucial to promote understanding, empathy,
                and respect for all individuals, regardless of their identities.
              </p>
            </div>
          )}
          {data.toxic && data.insult && (
            <div className="mt-5">
              <p className="text-lg">
                Combining toxic language with insults generates strong negative
                reactions, such as anger, hurt, and humiliation. It damages
                relationships, promotes conflict, and diminishes self-esteem.
                Fostering respectful and constructive dialogue is essential for
                healthy communication and positive interactions.
              </p>
            </div>
          )}
          {data.obscene && (
            <div className="mt-5">
              <p className="text-lg">
                Obscene words typically elicit strong negative reactions from
                people, including shock, offense, and disgust. Such language can
                be deeply offensive, disrespectful, and hurtful. Individuals may
                respond with anger, outrage, or a desire to distance themselves
                from the situation. It can damage relationships, erode trust,
                and create a hostile environment. Promoting respectful and
                considerate communication is essential for fostering
                understanding and maintaining healthy interactions.
              </p>
            </div>
          )}
          {data.obscene && data.threat && (
            <>
              <div className="mt-5">
                <p className="text-lg">
                  Combining obscene language with threats creates an extremely
                  alarming and dangerous situation. The use of explicit or
                  vulgar language along with threats can evoke fear, anxiety,
                  and a sense of personal safety being compromised. It is a
                  highly destructive form of communication that can lead to
                  serious consequences, including legal repercussions and
                  emotional trauma. It is crucial to address such instances
                  promptly, involving the appropriate authorities and taking
                  necessary steps to ensure the safety and well-being of
                  everyone involved.
                </p>
              </div>
            </>
          )}
          {data.obscene && data.identity_hate && (
            <div className="mt-5">
              <p className="text-lg">
                When obscene language is combined with identity-based hate, it
                triggers highly damaging reactions. People targeted by this
                toxic combination often experience profound distress, shame, and
                a sense of being dehumanized. It reinforces harmful stereotypes,
                perpetuates discrimination, and further marginalizes individuals
                based on their race, ethnicity, gender, sexual orientation, or
                other aspects of their identity. The consequences can include
                emotional trauma, diminished self-worth, and an erosion of trust
                within communities. Promoting empathy, tolerance, and inclusive
                dialogue is crucial to combating such harmful behavior and
                fostering a more compassionate society.
              </p>
            </div>
          )}
          {data.threat && (
            <>
              When faced with a threat, people react with fear, anxiety, and a
              heightened sense of danger. They may take immediate steps to
              ensure their safety, report the threat, or seek support from
              others. Threats create a climate of vulnerability and require
              serious attention to prioritize personal well-being and security.
            </>
          )}
          {data.threat && data.insult && (
            <>
              Combining threats with insults creates an extremely toxic and
              harmful situation. It elicits strong negative reactions from
              people, including fear, anger, and hurt. Threats undermine
              personal safety and well-being, while insults demean and belittle
              individuals, damaging their self-esteem.
            </>
          )}
          {data.threat && data.identity_hate && (
            <>
              Combining threats with identity-based hate is an extremely
              dangerous and damaging combination. It instills fear, perpetuates
              discrimination, and undermines the well-being of individuals based
              on their identity. It creates a toxic environment that threatens
              personal safety and contributes to marginalization. It is crucial
              to address and confront such behavior to ensure the safety and
              dignity of all individuals involved.
            </>
          )}
          {data.toxic && data.obscene && data.threat && (
            <>
              Combining toxic language, threats, and obscene words is an
              incredibly harmful and alarming combination. It generates intense
              negative reactions, including fear, disgust, and a sense of
              personal safety being compromised. This toxic mix erodes trust,
              promotes hostility, and can cause severe emotional distress
            </>
          )}
          {data.toxic && data.obscene && data.insult && (
            <>
              Combining toxic, obscene, and insulting language creates an
              extremely offensive and harmful situation. Such behavior evokes
              strong negative reactions, including anger, hurt, and a sense of
              degradation
            </>
          )}
          {data.toxic && data.obscene && data.identity_hate && (
            <>
              Combining toxic, obscene, and identity-based hate speech is highly
              damaging and reprehensible.
            </>
          )}
          {data.toxic && data.obscene && data.identity_hate && data.insult && (
            <>
              <>
                Combining toxic ,insults, obscene language, and identity-based
                hate is an abhorrent and harmful combination.
              </>
            </>
          )}
          {data.toxic &&
            data.identity_hate &&
            data.obscene &&
            data.insult &&
            data.threat && (
              <>
                This contains all of negative aspects so it can be more harmful
                people get angry ,may damage relationships,
              </>
            )}
          {data.obscene && data.threat && data.insult && (
            <>
              Combining obscene language, threats, and insults is an extremely
              dangerous and reprehensible combination. It creates an environment
              of fear, degradation, and personal safety being compromised
            </>
          )}
          {data.obscene && data.threat && data.identity_hate && (
            <>
              Combining obscene language, threats, and indentity_hate is an
              extremely dangerous and reprehensible combination. It creates an
              environment of fear, degradation, and personal safety being
              compromised
            </>
          )}
          {data.threat && data.insult && data.identity_hate && (
            <>
              Combining threats, insults, and identity-based hate is an utterly
              reprehensible and harmful combination. It instills fear,
              perpetuates discrimination, and dehumanizes individuals based on
              their identity. This toxic blend of behavior creates an
              environment of intimidation, hostility, and marginalization.
            </>
          )}
          {data.toxic && data.obscene && data.threat && data.identity_hate && (
            <>
              Combining toxic, obscene language, threats, and identity-based
              hate is an extremely harmful and deplorable combination. It
              displays a complete disregard for empathy, respect, and basic
              human dignity.
            </>
          )}
          {data.obscene && data.threat && data.insult && data.identity_hate && (
            <>
              The combination of obscene insults, threats, and identity-based
              hate is an utterly reprehensible and dangerous mixture. It
              represents an extreme form of toxicity that dehumanizes and
              targets individuals based on their identity while using explicit
              and derogatory language.
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col bg-green-500 text-white p-5 min-h-[400px] mt-5">
          <p className="text-xl font-bold mb-3">Congratulations!!</p>
          <p>
            The sentence you provided doesn't contain any kind of offensive and
            hate word!
          </p>
          <div className="mt-10 ml-20 transform transition-transform hover:scale-95 cursor-pointer">
            <img
              src="svg1.svg"
              alt="success"
              height={200}
              width={200}
              className=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OutputBox;
