import {firebase} from '../firebase';

export const Checkbox = ({id}) => {
  const archvieTask = () => 
  firebase
    .firestore()
    .collection('tasks')
    .doc(id) // document id
    .update({
        archived: true,

    });

    return (
      <div className="checkbox-holder" onClick={() => archvieTask()}>

      </div>
    )
}

export default Checkbox;