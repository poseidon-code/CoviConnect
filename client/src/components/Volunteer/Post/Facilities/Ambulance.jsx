import styles from '../Post.module.scss';

const Ambulance = (props) => {
    return (
        <div className={styles.type}>
            <h5
                style={{
                    background: 'hsl(0, 60%, 50%)',
                }}>
                AMBULANCE
            </h5>
            <p>
                <b>
                    <em>Service Provider : </em>
                </b>
                {props.post.info.serviceProvider}
            </p>
            <p>
                <b>
                    <em>Contact : </em>
                </b>
                {props.post.info.contactNum}
            </p>
            <p>
                <b>
                    <em>Location : </em>
                </b>
                {props.post.info.location}
            </p>
            <p>
                <b>
                    <em>Votes : </em>
                </b>
                {props.post.votes}
            </p>
        </div>
    );
};

export default Ambulance;
